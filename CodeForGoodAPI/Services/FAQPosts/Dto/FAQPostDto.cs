using CodeForGoodAPI.Models;

namespace CodeForGoodAPI.Services.FAQPosts.Dto;

public class FAQPostDto
{
    public int Id { get; set; }
    public string Question { get; set; }
    public string? Answer { get; set; }

    public FAQPost ConvertToEntity()
    {
        return new FAQPost
        {
            Id = Id,
            Question = Question,
            Answer = Answer,
        };
    }
}