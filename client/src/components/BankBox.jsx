var React = require('react');
var AccountBox = require('./AccountBox.jsx');
var AccountList = require('./AccountList.jsx');
var TotalDisplay = require('./TotalDisplay');
var accounts = require('../sample_accounts.js')

var BankBox = React.createClass({

getInitialState: function(){
  return {allAccounts: accounts}
},

getAccountsTotal: function(accounts){
  var total = 0
  for (var account of accounts){
    total += account.amount;
  }
  return total;
},

getPersonalAccounts: function(){
  var personalAccounts = []
  for (var account of this.state.allAccounts){
    if (account.type === "Personal") {
      personalAccounts.push(account)
    }
  }
  return personalAccounts;
},

getBusinessAccounts: function(){
  var businessAccounts = []
  for (var account of this.state.allAccounts){
    if (account.type === "Business"){
      businessAccounts.push(account)
    }
  }
  return businessAccounts;
},


render: function() {
  return (
      <div>
        <h2>Bank Box</h2>
        <h4>{this.getAccountsTotal(this.state.allAccounts)}</h4>
        <AccountBox 
          accounts={this.state.allAccounts} 
          accounts_total={this.getAccountsTotal( this.getBusinessAccounts() )} 
          accountsType={this.getPersonalAccounts()}
        />
        <AccountBox
          accounts={this.state.allAccounts} 
          accounts_total={this.getAccountsTotal( this.getPersonalAccounts() )} 
          accountsType={this.getBusinessAccounts()}
        />
      </div>
    );
  }

});

module.exports = BankBox;