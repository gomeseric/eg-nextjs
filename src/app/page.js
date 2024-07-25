import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  let { data: branches, error } = await supabase.from("branches").select("*");


  return (
  <div>
    Hello MDC 27 - {user?.data?.user?.email} 
  <ul>
    {branches?.map((branch) => (
      <li>{branch.name}</li>
    ))}
  </ul>
  </div>
  );
}
