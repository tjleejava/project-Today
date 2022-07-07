class PlatformInquiryDTO{
  platformInquiryNo;
  platformInquiryTitle;
  platformInquiryContent;
  platformInquiryDate;
  memberNo;
  nickname;
  replyYN;

  constructor(data) {
    this.platformInquiryNo = data.PLATFORM_INQUIRY_NO;
    this.platformInquiryTitle = data.PLATFORM_INQUIRY_TITLE;
    this.platformInquiryContent = data.PLATFORM_INQUIRY_CONTENT;
    this.platformInquiryDate = data.PLATFORM_INQUIRY_DATE;
    this.memberNo = data.MEMBER_NO;
    this.replyYN = data.PLATFORM_INQUIRY_REPLY_NO;
    this.nickname = data.NICKNAME;
  }
}

module.exports = PlatformInquiryDTO;