exports.lightContainerDetail = (id, inspectedData) => ({
  id: inspectedData.Id,
  short_id: id,
  created: inspectedData.Created,
  state: {
    status: inspectedData.State.Status,
    running: inspectedData.State.Running,
    paused: inspectedData.State.Paused,
    restarting: inspectedData.State.Restarting,
    oom_killed: inspectedData.State.OOMKilled,
    dead: inspectedData.State.Dead,
    pid: inspectedData.State.Pid,
    exit_code: inspectedData.State.ExitCode,
    error: inspectedData.State.Error,
    started_at: inspectedData.State.StartedAt,
    finished_at: inspectedData.State.FinishedAt,
  },
  name: inspectedData.Name.replace("/", ""),
});
