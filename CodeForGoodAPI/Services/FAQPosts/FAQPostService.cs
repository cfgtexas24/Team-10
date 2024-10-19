using CodeForGoodAPI.Models;
using CodeForGoodAPI.Services.FAQPosts.Dto;

namespace CodeForGoodAPI.Services.FAQPosts;

public class FAQPostService : IFAQPostService
{
    private readonly BaseDbContext _context;

    public FAQPostService(BaseDbContext context)
    {
        _context = context;
    }


    public FAQPostDto GetFAQPost(int id)
    {
        var post = _context.FAQPosts.FirstOrDefault(post => post.Id == id);
        return post.ConvertToDto();
    }

    public List<FAQPostDto> GetFAQPosts()
    {
        var posts = _context.FAQPosts.ToList();
        return posts.Select(post => post.ConvertToDto()).ToList();
    }

    public void CreateFAQPost(FAQPostDto dto)
    {
        var post = dto.ConvertToEntity();
        _context.FAQPosts.Add(post);
        _context.SaveChanges();
    }

    public void DeleteFAQPost(int id)
    {
        var post = _context.FAQPosts.FirstOrDefault(post => post.Id == id);
        _context.FAQPosts.Remove(post);
        _context.SaveChanges();
    }
}