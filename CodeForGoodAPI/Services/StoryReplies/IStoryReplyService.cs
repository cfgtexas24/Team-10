using CodeForGoodAPI.Services.Stories.Dto;

namespace CodeForGoodAPI.Services.StoryReplies;

public interface IStoryReplyService
{
    public void AddStoryReply(StoryReplyDto dto);
    public void DeleteStoryReply(int storyReplyId);
    public List<StoryReplyDto> GetStoryReplies(int storyId);
}