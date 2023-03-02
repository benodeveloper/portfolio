import { BlogSection } from "~/components/blogSection";
import { Welcome } from "~/components/welcome";
import { Layout } from "~/layouts/mainLayout";
import { BasePageLayout } from "~/types";

const app: BasePageLayout = () => {
  return <>
    <Welcome/>
    <BlogSection/>
  </>
}

app.getLayout = Layout

export default app;
