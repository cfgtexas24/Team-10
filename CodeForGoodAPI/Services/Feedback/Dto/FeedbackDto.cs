namespace CodeForGoodAPI.Services.Feedback.Dto;

public class FeedbackDto
{
    public int Id { get; set; }
    public string Content { get; set; }
    public int Rating { get; set; }
    public int AccountId { get; set; }

    public Models.Feedback ConvertToEntity()
    {
        return new Models.Feedback
        {
            Id = Id,
            Content = Content,
            Rating = Rating,
            AccountId = AccountId
        };
    }
}