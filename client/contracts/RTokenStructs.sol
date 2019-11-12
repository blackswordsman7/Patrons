pragma solidity >=0.5.10 <0.6.0;

contract RTokenStructs {

    
    struct Patron {
        address owner;
        string title;
        string description;
        string link;
        string iconlink;
        string githublink;
        address[] recipients;
        uint32[] proportions;
    }

    /// @dev Account structure
    struct aAccount{
        //
        // Essential info
        //
        /// @dev ID of the hat selected for the account
        uint256 hatID;
        /// @dev Redeemable token balance for the account
        uint256 rAmount;
        /// @dev Redeemable token balance portion that is from interest payment
        uint256 rInterest;
        /// @dev Loan recipients and their amount of debt
        mapping (address => uint256) lRecipients;
        /// @dev Loan debt amount for the account
        uint256 lDebt;
        /// @dev Saving asset amount internal
        uint256 sInternalAmount;

        uint256 cumulativeInterest;
    }
}
