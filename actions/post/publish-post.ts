"use server";

import { postCreateSchema, postPublishSchema } from "@/lib/validation/post";
import type { Database } from "@/types/supabase";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import * as z from "zod";

export async function PublishPost(context: z.infer<typeof postPublishSchema>) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  try {
    const post = postPublishSchema.parse(context);
    const { data, error } = await supabase
      .from("drafts")
      .update({ published: true })
      .eq("id", post.id)
      .eq("author_id", post.user_id)
      .select()
      .single();

    if (error) {
      console.log(error);
      return null;
    }
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
