using CodeForGoodAPI.Services.Stories.Dto;

namespace CodeForGoodAPI.Models;

public class StoryReply
{
    public int Id { get; set; }
    public int StoryId { get; set; }
    public string Content { get; set; }
    
    public Story Story { get; set; }

    public StoryReplyDto ConvertToDto()
    {
        return new StoryReplyDto
        {
            Id = Id,
            Content = Content,
            StoryId = StoryId,
        };
    }
}