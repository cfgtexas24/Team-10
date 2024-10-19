using CodeForGoodAPI.Services.FAQPosts.Dto;

namespace CodeForGoodAPI.Services.FAQPosts;

public interface IFAQPostService
{
    public FAQPostDto GetFAQPost(int id);
    public List<FAQPostDto> GetFAQPosts();
    public void CreateFAQPost(FAQPostDto dto);
    public void DeleteFAQPost(int id);
}