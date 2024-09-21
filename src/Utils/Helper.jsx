export const getPriorityIcon = (priority, colored = false) => {
  switch (priority) {
    case "No priority":
      return (
        <div>
          <img src="/icons_FEtask/3-dot-menu.svg" alt="3-dot" size={14} />
        </div>
      );
    case "Low":
      return (
        <div>
          <img
            src={
              colored
                ? "/icons_FEtask/Img-Low-Priority.svg" // Colored icon
                : "/icons_FEtask/Img-Low-Priority.svg" // Grey icon
            }
            alt="Low Priority"
            size={14}
          />
        </div>
      );
    case "Medium":
      return (
        <div>
          <img
            src={
              colored
                ? "/icons_FEtask/Img-Medium-Priority.svg"
                : "/icons_FEtask/Img-Medium-Priority.svg"
            }
            alt="Medium Priority"
            size={14}
          />
        </div>
      );
    case "High":
      return (
        <div>
          <img
            src={
              colored
                ? "/icons_FEtask/Img-High-Priority.svg"
                : "/icons_FEtask/Img-High-Priority.svg"
            }
            alt="High Priority"
            size={14}
          />
        </div>
      );
    case "Urgent":
      return (
        <div>
          <img
            src={
              colored
                ? "/icons_FEtask/SVG-Urgent-Priority-colour.svg" // Colored urgent icon
                : "/icons_FEtask/SVG-Urgent-Priority-grey.svg" // Grey urgent icon
            }
            alt="Urgent Priority"
            size={14}
          />
        </div>
      );
    default:
      return (
        <div>
          <img src="/icons_FEtask/3-dot-menu.svg" alt="3-dot" size={14} />
        </div>
      );
  }
};

export const getStatusIcon = (priority) => {
  switch (priority) {
    case "Backlog":
      return (
        <div>
          <img src="/icons_FEtask/Backlog.svg" alt="Backlog" size={24} />
        </div>
      );
    case "Todo":
      return (
        <div>
          <img src="/icons_FEtask/To-do.svg" alt="to-do" size={24} />
        </div>
      );
    case "In progress":
      return (
        <div>
          <img
            src="/icons_FEtask/in-progress.svg"
            alt="in-progress"
            size={16}
          />
        </div>
      );
    case "Done":
      return (
        <div>
          <img src="/icons_FEtask/Done.svg" alt="done" size={16} />
        </div>
      );
    case "Canceled":
      return (
        <div>
          <img src="/icons_FEtask/Cancelled.svg" alt="cancelled" size={16} />
        </div>
      );
    default:
      return (
        <div>
          <img src="/icons_FEtask/Backlog.svg" alt="default" size={16} />
        </div>
      );
  }
};
