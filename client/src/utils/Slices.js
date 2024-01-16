import HTTP from "@/http-common";

export const getContainers = async (status) => {
  let data = null;
  await HTTP.get("container/fetch", { params: { status: status } }).then(
    (response) => {
      data = response.data;
    }
  );
  return data;
};

export const getConsumptionStats = async () => {
  let data = null;
  await HTTP.get("container/stats").then((response) => {
    data = response.data;
  });
  return data;
};
