namespace ApplicantApi.Models
{
    public class Applicant
    {
        public string ApplicantId { get; set; }
        public string ApplicantName { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
        public string CreateDate { get; set; }
        public string LatestedUpdateDate { get; set; }
    }
}
