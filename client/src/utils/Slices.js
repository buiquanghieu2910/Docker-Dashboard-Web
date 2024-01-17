import HTTP from "@/http-common";

/**
 * Get containers
 * @param {*} status
 * @returns Arrays
 */
export const getContainers = async (status) => {
  let data = null;
  await HTTP.get("container/fetch", { params: { status: status } }).then(
    (response) => {
      data = response.data;
    }
  );
  return data;
};

/**
 * Get container by id
 * @param {*} id
 * @returns Arrays
 */
export const getContainerById = async (id) => {
  let data = null;
  await HTTP.get("container/fetchById", { params: { container: id } }).then(
    (response) => {
      data = response.data;
    }
  );
  return data;
};

/**
 * Get logs container
 * @param {*} id
 * @returns mixed
 */
export const getLogsContainer = async (id) => {
  let data = null;
  await HTTP.get("container/logs", { params: { container: id } }).then(
    (response) => {
      data = response.data;
    }
  );
  return data;
};

/**
 * Execute command container
 * @param {*} id
 * @param {*} command
 * @returns id container
 */
export const execCommandContainer = async (id, command) => {
  let data = null;
  await HTTP.get("container/command", {
    params: { container: id, command: command },
  }).then((response) => {
    data = response.data;
  });
  return data;
};

/**
 * Get images
 * @param {*}
 * @returns Arrays
 */
export const getImages = async () => {
  let data = null;
  await HTTP.get("image/fetch").then((response) => {
    data = response.data;
  });
  return data;
};

/**
 * Get consumption stats
 * @returns Arrays
 */
export const getConsumptionStats = async () => {
  let data = null;
  await HTTP.get("container/stats").then((response) => {
    data = response.data;
  });
  return data;
};
