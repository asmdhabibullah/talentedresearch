import React from "react";
import { Card1 } from "../Card1";
import Divider from "../Divider";
import FlexBox from "../FlexBox";
import Typography from "../Typography";

const CheckoutSummary: React.FC = () => {
  return (
    <Card1>
      <FlexBox justifyContent="space-between" alignItems="center" mb="0.5rem">
        <Typography color="text.hint">Subtotal:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            $2610.
          </Typography>
          <Typography fontWeight="600" fontSize="14px" lineHeight="1">
            00
          </Typography>
        </FlexBox>
      </FlexBox>
      <FlexBox justifyContent="space-between" alignItems="center" mb="0.5rem">
        <Typography color="text.hint">Shipping:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            -
          </Typography>
        </FlexBox>
      </FlexBox>
      <FlexBox justifyContent="space-between" alignItems="center" mb="0.5rem">
        <Typography color="text.hint">Tax:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            $40.
          </Typography>
          <Typography fontWeight="600" fontSize="14px" lineHeight="1">
            00
          </Typography>
        </FlexBox>
      </FlexBox>
      <FlexBox justifyContent="space-between" alignItems="center" mb="1rem">
        <Typography color="text.hint">Discount:</Typography>
        <FlexBox alignItems="flex-end">
          <Typography fontSize="18px" fontWeight="600" lineHeight="1">
            -
          </Typography>
        </FlexBox>
      </FlexBox>

      <Divider mb="1rem" />

      <Typography
        fontSize="25px"
        fontWeight="600"
        lineHeight="1"
        textAlign="right"
      >
        $2610.00
      </Typography>
    </Card1>
  );
};

export default CheckoutSummary;
