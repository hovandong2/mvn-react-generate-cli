import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import ContentLayout from "@app/components/layouts/ContentLayout/ContentLayout";

const {typeCap}Screen = () => {
  const { t } = useTranslation();
  return (
    <ContentLayout header={{ title: t("{type}.title") }}>
      <p>This is the {typeCap} page</p>
      <Link to="/{type}/12">To Detail page</Link>
      <br />
      <Link to="/{type}/new">To Add page</Link>
      <br />
      <Link to="/{type}/12/edit">To Edit page</Link>
    </ContentLayout>
  );
};

export default {typeCap}Screen;
