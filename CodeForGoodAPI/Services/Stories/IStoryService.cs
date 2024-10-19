using CodeForGoodAPI.Services.Stories.Dto;

namespace CodeForGoodAPI.Services.Stories;

public interface IStoryService
{
    public StoryDto GetStoryById(int id);
    public List<StoryDto> GetAllStories();
    public void Create(StoryDto dto);
}