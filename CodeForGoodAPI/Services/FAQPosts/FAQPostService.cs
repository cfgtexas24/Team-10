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


    public FAQPostDto? GetFAQPost(int id)
    {
        var post = _context.FAQPosts.FirstOrDefault(post => post.Id == id);
        return post?.ConvertToDto();
    }

    public List<FAQPostDto> GetFAQPosts()
    {
        var posts = _context.FAQPosts.ToList();
        return posts.Select(post => post.ConvertToDto()).ToList();
    }

    public bool CreateFAQPost(FAQPostDto dto)
    {
        var post = dto.ConvertToEntity();
        _context.FAQPosts.Add(post);
        _context.SaveChanges();
        return true;
    }

    public bool DeleteFAQPost(int id)
    {
        var post = _context.FAQPosts.FirstOrDefault(post => post.Id == id);
        if (post == null)
        {
            return false;
        }
        _context.FAQPosts.Remove(post);
        _context.SaveChanges();
        return true;
    }

    public bool EditFAQPost(FAQPostDto dto)
    {
        var post = _context.FAQPosts.FirstOrDefault(post => post.Id == dto.Id);
        if (post == null)
        {
            return false;
        }
        post.Question = dto.Question;
        post.Answer = dto.Answer;
        _context.FAQPosts.Update(post);
        _context.SaveChanges();
        return true;
    }
}