using CodeForGoodAPI.Services.FAQPosts.Dto;

namespace CodeForGoodAPI.Services.FAQPosts;

public interface IFAQPostService
{
    public FAQPostDto? GetFAQPost(int id);
    public List<FAQPostDto> GetFAQPosts();
    public bool CreateFAQPost(FAQPostDto dto);
    public bool DeleteFAQPost(int id);
}