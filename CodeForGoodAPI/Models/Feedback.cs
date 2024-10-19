using CodeForGoodAPI.Services.Feedback.Dto;

namespace CodeForGoodAPI.Models;

public class Feedback
{
    public int Id { get; set; }
    public string Content { get; set; }
    public int Rating { get; set; }
    public int AccountId { get; set; }
    
    // Navigation props
    public Account Account { get; set; }

    public FeedbackDto ConvertToDto()
    {
        return new FeedbackDto
        {
            Id = Id,
            Content = Content,
            Rating = Rating,
            AccountId = AccountId,
        };
    }
}