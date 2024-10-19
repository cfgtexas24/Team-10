using CodeForGoodAPI.Services.Stories.Dto;

namespace CodeForGoodAPI.Models;

public class Story
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    
    public ICollection<StoryReply> Replies { get; set; }

    public StoryDto ConvertToDto()
    {
        return new StoryDto
        {
            Id = Id,
            Title = Title,
            Description = Description,
        };
    }
}