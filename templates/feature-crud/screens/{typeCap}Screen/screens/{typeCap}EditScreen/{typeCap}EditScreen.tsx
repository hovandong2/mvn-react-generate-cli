import { useTranslation } from "react-i18next";

import ContentLayout from "@app/components/layouts/ContentLayout/ContentLayout";

const {typeCap}EditScreen = () => {
  const { t } = useTranslation();
  return (
    <ContentLayout header={{ title: t("{type}.title") }}>
      <p>This is the {typeCap} Edit page</p>
    </ContentLayout>
  );
};

export default {typeCap}EditScreen;
