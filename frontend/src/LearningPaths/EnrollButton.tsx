import { useState } from "react";
import {
  Button,
  useDataProvider,
  useNotify,
  usePermissions,
  useRecordContext,
  useRefresh,
} from "react-admin";
import { Employee, Permissions } from "../types";

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
      const updatedPathEnrolled = record?.enrolled.includes(permissions?.userId)
        ? record.enrolled.filter((id: number) => id !== permissions?.userId)
        : [...record?.enrolled, permissions?.userId];

      const { data: currentEmployee } = await dataProvider.getOne<Employee>(
        "employees",
        {
          id: permissions?.userId ?? 1,
        },
      );
      const updatedEmpEnrolled = currentEmployee.enrolled.includes(
        record?.id as number,
      )
        ? currentEmployee.enrolled.filter((id: number) => id !== record?.id)
        : [...currentEmployee.enrolled, record?.id];

      await dataProvider.update("learning_paths", {
        id: record?.id,
        data: { ...record, enrolled: updatedPathEnrolled },
        previousData: record,
      });

      await dataProvider.update("employees", {
        id: currentEmployee.id,
        data: {
          ...currentEmployee,
          enrolled: updatedEmpEnrolled,
        },
        previousData: currentEmployee,
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
