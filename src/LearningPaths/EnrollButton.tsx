import { useState } from "react";
import {
  Button,
  useDataProvider,
  useNotify,
  usePermissions,
  useRecordContext,
  useRefresh,
} from "react-admin";
import { Permissions } from "../types";

const EnrollButton = () => {
  const { permissions } = usePermissions<Permissions>();
  const record = useRecordContext();
  const dataProvider = useDataProvider();
  const notify = useNotify();
  const refresh = useRefresh();
  const [loading, setLoading] = useState(false);

  const handleEnroll = async () => {
    setLoading(true);
    try {
      const updatedEnrolled = record?.enrolled.includes(permissions?.userId)
        ? record.enrolled.filter((id: number) => id !== permissions?.userId)
        : [...record?.enrolled, permissions?.userId];

      await dataProvider.update("learning_paths", {
        id: record?.id,
        data: { ...record, enrolled: updatedEnrolled },
        previousData: record,
      });

      notify("Enrollment updated successfully", { type: "success" });
      refresh();
    } catch (error) {
      notify("Error updating enrollment", { type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="contained"
      size="medium"
      label={
        record?.enrolled.includes(permissions?.userId) ? "Unenroll" : "Enroll"
      }
      onClick={handleEnroll}
      disabled={loading}
    />
  );
};

export default EnrollButton;
