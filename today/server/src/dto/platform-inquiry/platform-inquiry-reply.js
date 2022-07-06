class PlatformInquiryReplyDTO{
  platfomrInquiryReplyNo;
  adminNo;
  platfomrInquiryReplyContent;
  platfomrInquiryReplyDate;
  platfomrInquiryNo;

  constructor(data) {
    if(data == undefined) {
      
    } else {
      this.platfomrInquiryReplyNo = data.PLATFORM_INQUIRY_REPLY_NO;
      this.adminNo = data.ADMIN_NO;
      this.platfomrInquiryReplyContent = data.PLATFORM_INQUIRY_REPLY_CONTENT;
      this.platfomrInquiryReplyDate = data.PLATFORM_INQUIRY_REPLY_DATE;
      this.platfomrInquiryNo = data.PLATFORM_INQUIRY_NO;
    }
  }
}

module.exports = PlatformInquiryReplyDTO;