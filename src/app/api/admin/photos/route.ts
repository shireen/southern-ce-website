import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";
import { getPhotosByCategory, uploadPhoto } from "@/lib/cloudinary";
import { revalidatePath } from "next/cache";

async function authenticate(request: Request): Promise<boolean> {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) return false;
  const token = authHeader.slice(7);
  return verifyToken(token);
}

export async function GET(request: Request) {
  if (!(await authenticate(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const photos = await getPhotosByCategory();
    return NextResponse.json({ photos });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch photos" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  if (!(await authenticate(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const category = formData.get("category") as string | null;
    const caption = formData.get("caption") as string | null;

    if (!file || !category) {
      return NextResponse.json(
        { error: "File and category are required" },
        { status: 400 }
      );
    }

    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File must be under 10MB" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const photo = await uploadPhoto(buffer, category, caption ?? "");

    // Revalidate gallery page so new photos show up immediately
    revalidatePath("/gallery");

    return NextResponse.json({ photo }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to upload photo" },
      { status: 500 }
    );
  }
}
