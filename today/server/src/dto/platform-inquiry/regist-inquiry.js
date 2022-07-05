class RegistPlatformInquiryDTO{
  platformInquiryTitle;
  platformInquiryContent;
  platformInquiryDate;
  memberNo;

  constructor(data) {
    this.platformInquiryTitle = data.title;
    this.platformInquiryContent = data.content;
    this.platformInquiryDate = data.date;
    this.memberNo = data.memberNo;
  }
}

module.exports =  RegistPlatformInquiryDTO;