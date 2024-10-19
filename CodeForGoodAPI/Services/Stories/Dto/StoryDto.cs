using CodeForGoodAPI.Models;

namespace CodeForGoodAPI.Services.Stories.Dto;

public class StoryDto
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }

    public Story ConvertToEntity()
    {
        return new Story
        {
            Id = Id,
            Title = Title,
            Description = Description
        };
    }
}