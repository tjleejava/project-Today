class PlatformInquiry{
  platformInquiryNo;
  platformInquiryTitle;
  platformInquiryContent;
  platformInquiryDate;
  memberNo;

  constructor(data) {
    this.platformInquiryNo = data.PLATFORM_INQUIRY_NO;
    this.platformInquiryTitle = data.PLATFORM_INQUIRY_TITLE;
    this.platformInquiryContent = data.PLATFORM_INQUIRY_CONTENT;
    this.platformInquiryDate = data.PLATFORM_INQUIRY_DATE;
    this.memberNo = data.MEMBER_NO;
  }
}