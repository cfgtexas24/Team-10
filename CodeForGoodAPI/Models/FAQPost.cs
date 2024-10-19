using CodeForGoodAPI.Services.FAQPosts.Dto;

namespace CodeForGoodAPI.Models;

public class FAQPost
{
    public int Id { get; set; }
    public string Question { get; set; }
    public string? Answer { get; set; }

    public FAQPostDto ConvertToDto()
    {
        return new FAQPostDto
        {
            Id = Id,
            Question = Question,
            Answer = Answer
        };
    }
}