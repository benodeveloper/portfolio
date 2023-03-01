import { Welcome } from "~/components/welcome";
import { Layout } from "~/layouts/mainLayout";
import { BasePageLayout } from "~/types";

const app: BasePageLayout = () => {
  return <>
    <Welcome/>
  </>
}

app.getLayout = Layout

export default app;
