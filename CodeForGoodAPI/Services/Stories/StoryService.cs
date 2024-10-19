using CodeForGoodAPI.Models;
using CodeForGoodAPI.Services.Stories.Dto;
using Microsoft.EntityFrameworkCore;

namespace CodeForGoodAPI.Services.Stories;

public class StoryService : IStoryService
{
    private readonly BaseDbContext _context;

    public StoryService(BaseDbContext context)
    {
        _context = context;
    }


    public StoryDto GetStoryById(int id)
    {
        var story = _context.Stories.Include(s => s.Replies).FirstOrDefault(s => s.Id == id);
        return story.ConvertToDto();
    }

    public List<StoryDto> GetAllStories()
    {
        var stories = _context.Stories.Include(s => s.Replies).ToList();
        return stories.Select(s => s.ConvertToDto()).ToList();
    }

    public void Create(StoryDto dto)
    {
        var story = dto.ConvertToEntity();
        _context.Stories.Add(story);
        _context.SaveChanges();
    }
}