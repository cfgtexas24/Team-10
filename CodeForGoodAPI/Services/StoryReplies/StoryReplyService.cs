using CodeForGoodAPI.Models;
using CodeForGoodAPI.Services.Stories.Dto;

namespace CodeForGoodAPI.Services.StoryReplies;

public class StoryReplyService : IStoryReplyService
{
    private readonly BaseDbContext _context;

    public StoryReplyService(BaseDbContext context)
    {
        _context = context;
    }
    
    public void AddStoryReply(StoryReplyDto dto)
    {
        var storyReply = dto.ConvertToEntity();
        _context.StoryReplies.Add(storyReply);
        _context.SaveChanges();
    }

    public void DeleteStoryReply(int storyReplyId)
    {
        var storyReply = _context.StoryReplies.FirstOrDefault(s => s.Id == storyReplyId);
        _context.StoryReplies.Remove(storyReply);
        _context.SaveChanges();
    }

    public List<StoryReplyDto> GetStoryReplies(int storyId)
    {
        var storyReplies = _context.StoryReplies.ToList();
        return storyReplies.Select(s => s.ConvertToDto()).ToList();
    }
}