namespace Todosharp.Models;

public class TodoModel
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public DateTime DueDate { get; set; }

    public TodoStatus Status { get; set; } = TodoStatus.ToDo;
}

public enum TodoStatus
{
    ToDo,
    InProgress,
    Done
}
