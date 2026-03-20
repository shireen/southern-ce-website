import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { deletePhoto } from "@/lib/cloudinary";
import { revalidatePath } from "next/cache";

async function authenticate(request: Request): Promise<boolean> {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) return false;
  const token = authHeader.slice(7);
  return verifyToken(token);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ publicId: string[] }> }
) {
  if (!(await authenticate(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { publicId } = await params;
    const fullPublicId = publicId.join("/");
    await deletePhoto(fullPublicId);

    revalidatePath("/gallery");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete photo" },
      { status: 500 }
    );
  }
}
