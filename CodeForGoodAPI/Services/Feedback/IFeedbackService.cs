using CodeForGoodAPI.Services.Feedback.Dto;

namespace CodeForGoodAPI.Services.Feedback;

public interface IFeedbackService
{
    public FeedbackDto? GetFeedbackById(int id);
    public List<FeedbackDto> GetFeedbackByUserId(int userId);
    public List<FeedbackDto> GetAllFeedback();
    public bool CreateFeedback(FeedbackDto dto);
    public bool DeleteFeedback(int id);
}