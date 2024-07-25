import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const user = await supabase.auth.getUser();

  return <div>Hello MDC 27 - {user?.data?.user?.email} </div>;
}
