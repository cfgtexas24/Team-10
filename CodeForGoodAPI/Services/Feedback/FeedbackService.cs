using CodeForGoodAPI.Models;
using CodeForGoodAPI.Services.Feedback.Dto;

namespace CodeForGoodAPI.Services.Feedback;

public class FeedbackService : IFeedbackService
{
    private BaseDbContext _context;

    public FeedbackService(BaseDbContext context)
    {
        _context = context;
    }
    
    public FeedbackDto? GetFeedbackById(int id)
    {
        var feedback = _context.Feedback.FirstOrDefault(f => f.Id == id);
        if (feedback == null)
        {
            return null;
        }
        
        return feedback.ConvertToDto();
    }

    public List<FeedbackDto> GetFeedbackByUserId(int userId)
    {
        var feedbacks = _context.Feedback.Where(f => f.AccountId == userId).ToList();
        return feedbacks.Select(x => x.ConvertToDto()).ToList();
    }

    public List<FeedbackDto> GetAllFeedback()
    {
        var feedbacks = _context.Feedback.ToList();
        return feedbacks.Select(x => x.ConvertToDto()).ToList();
    }

    public bool CreateFeedback(FeedbackDto dto)
    {
        var entity = dto.ConvertToEntity();
        _context.Feedback.Add(entity);
        _context.SaveChanges();
        return true;
    }

    public bool DeleteFeedback(int id)
    {
        var feedback = _context.Feedback.FirstOrDefault(f => f.Id == id);
        if (feedback == null)
        {
            return false;
        }
        _context.Feedback.Remove(feedback);
        _context.SaveChanges();
        return true;
    }
}