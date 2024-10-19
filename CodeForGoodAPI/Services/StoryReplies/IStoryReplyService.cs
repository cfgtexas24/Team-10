using CodeForGoodAPI.Services.Stories.Dto;

namespace CodeForGoodAPI.Services.StoryReplies;

public interface IStoryReplyService
{
    public bool AddStoryReply(StoryReplyDto dto);
    public bool DeleteStoryReply(int storyReplyId);
    public List<StoryReplyDto> GetStoryReplies(int storyId);
}