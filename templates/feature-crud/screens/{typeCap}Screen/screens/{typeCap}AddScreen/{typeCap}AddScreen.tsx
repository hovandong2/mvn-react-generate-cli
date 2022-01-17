import { useTranslation } from "react-i18next";

import ContentLayout from "@app/components/layouts/ContentLayout/ContentLayout";

const {typeCap}AddScreen = () => {
  const { t } = useTranslation();
  return (
    <ContentLayout header={{ title: t("{type}.title") }}>
      <p>This is the {typeCap} Add page</p>
    </ContentLayout>
  );
};

export default {typeCap}AddScreen;
