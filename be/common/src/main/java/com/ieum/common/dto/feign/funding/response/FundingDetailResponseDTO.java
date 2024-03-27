package com.ieum.common.dto.feign.funding.response;


import com.ieum.common.dto.feign.funding.dto.FundingMemberDTO;
import com.ieum.common.dto.feign.funding.dto.FundingProductDTO;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.experimental.SuperBuilder;

@Getter
@SuperBuilder
@AllArgsConstructor
@RequiredArgsConstructor
public class FundingDetailResponseDTO {
    private Long fundingId;
    private String facilityName;
    private String facilityAddress;
    private String facilityPhoneNumber;
    private String facilityRepresentativeName;
    private String facilityRepresentativePhoneNumber;
    private Integer facilityCapacity;
    private String facilityImage;
    private String fundingOpenDate;
    private String fundingFinishDate;
    private Long fundingPeopleCnt;
    private String fundingTitle;
    private Integer goalAmount;
    private Integer currentAmount;
    private Boolean currentLink;
    private List<FundingMemberDTO> people;
    private String content;
    private List<FundingProductDTO> products;
}