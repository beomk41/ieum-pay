package com.ieum.funding.request;

import lombok.Data;

@Data
public class FundingDonationRequestDTO {
    private Long fundingId;
    private Long memberId;
    private Integer amount;
}