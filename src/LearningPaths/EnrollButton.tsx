import { useState } from "react";
import {
  Button,
  useDataProvider,
  useNotify,
  useRecordContext,
  useRefresh,
} from "react-admin";

const EnrollButton = () => {
  const record = useRecordContext();
  const dataProvider = useDataProvider();
  const notify = useNotify();
  const refresh = useRefresh();
  const [loading, setLoading] = useState(false);

  const handleEnroll = async () => {
    setLoading(true);
    try {
      const updatedEnrolled = record?.enrolled.includes(record.id)
        ? record.enrolled.filter((id: number) => id !== record.id)
        : [...record?.enrolled, record?.id];

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
      label={record?.enrolled.includes(record?.id) ? "Unenroll" : "Enroll"}
      onClick={handleEnroll}
      disabled={loading}
    />
  );
};

export default EnrollButton;
