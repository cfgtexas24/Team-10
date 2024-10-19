using CodeForGoodAPI.Models;

namespace CodeForGoodAPI.Services.Stories.Dto;

public class StoryReplyDto
{
    public int Id { get; set; }
    public string Content { get; set; }
    public int StoryId { get; set; }

    public StoryReply ConvertToEntity()
    {
        return new StoryReply
        {
            Id = Id,
            Content = Content,
            StoryId = StoryId
        };
    }
}