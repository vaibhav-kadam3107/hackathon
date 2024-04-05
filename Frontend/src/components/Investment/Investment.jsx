import React from 'react';

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="homepage">
        <h1 style={{ textAlign: 'center' }}>Investment Lessons</h1>
        {/* <div style={{ textAlign: 'center', marginBottom: '20px', marginLeft: '20px' }}>
          <img src="https://www.itnext.in/sites/default/files/styles/article_image/public/Stock%20Market.jpg?itok=f72_1seh" alt="" />
        </div> */}
        <h1>Stock Market Basics</h1>
        <p>All companies need money to run their business. Sometimes the profit acquired from selling goods or services is not sufficient to meet the working capital requirements. And so, companies invite normal people like you and me to put some money into their company so that they can run it efficiently and in return, investors get a share of whatever profit they make.</p>
        <p>Understanding this is the first step towards understanding stock market basics. Let’s learn about this in detail.</p>

        <h2>What are Stocks?</h2>
        <p>Stocks are simply an investment method to build wealth. When you invest in the stock of a company, it means you own a share in the company that issued the stock.</p>
        <p>Stock investment is a way to invest in some of the most successful companies.</p>

        <div style={{ float: 'left', marginRight: '20px' }}>
          <img src="https://www.wallstreetmojo.com/wp-content/uploads/2019/08/What-Is-A-Stock-Market.jpg" alt="" />
        </div>
        <h2>What is Share Market?</h2>
        <p>People often wonder what is stock market and share market, and often use it interchangeably.</p>
        <p>A stock market is similar to a share market. A share market is where the shares are issued or traded in. The primary difference between the two is that the stock market lets an individual trade in bonds, mutual funds, derivatives, shares of a company, etc. On the other hand, a share market only allows the trading of shares.</p>

        <div style={{ float: 'right', marginLeft: '20px' }}>
          <h2>What is Stock Market?</h2>
          <p>People often wonder what is stock market and share market, and often use it interchangeably.</p>
          <p>A stock market is similar to a share market. A share market is where the shares are issued or traded in. The primary difference between the two is that the stock market lets an individual trade in bonds, mutual funds, derivatives, shares of a company, etc. On the other hand, a share market only allows the trading of shares.</p>
        </div>

        <h2 style={{ clear: 'both' }}>How Does the Stock Market Work?</h2>
        <p>Companies raise money on the stock market by selling ownership stakes to investors. These equity stakes are known as shares of stock.</p>
        <p>By listing shares for sale on the stock exchanges that make up the stock market, companies get access to the capital they need to operate and expand their businesses without having to take on debt. Investors benefit by exchanging their money for shares on the stock market.</p>
        <p>As companies put that money to grow and expand their businesses, it profits the investors as their shares of stock become more valuable over time, leading to capital gains. In addition, companies pay dividends to their shareholders as their profits grow.</p>
        <p>The performances of individual stocks vary widely over time but taken as a whole, the stock market has historically rewarded investors with average annual returns of around 10%, making it one of the most reliable ways of growing your money.</p>

        <h2>Understanding the Stock Market Basics - Important Terms</h2>
        <ul>
          <li><strong>Sensex:</strong> Sensex is a collection of the top 30 stocks listed on the BSE by way of market capitalisation.</li>
          <li><strong>SEBI:</strong> The Securities and Exchange Board of India (SEBI) is the securities market regulator to oversee any fraudulent transactions and activities made by any of the parties: companies, investors, traders, brokers and the like.</li>
          <li><strong>Demat:</strong> Demat, or dematerialised account, is a form of an online portfolio that holds a customer’s shares and other securities in an electronic (dematerialised) format.</li>
          <li><strong>Trading:</strong> It is the process of buying or selling shares in a company.</li>
          <li><strong>Stock Index:</strong> A stock index or stock market index is a statistical source that measures financial market fluctuations. They are performance indicators that indicate the performance of a certain market segment or the market as a whole.</li>
        </ul>

        <h2>Types of Stock Market</h2>
        <p>There are 2 types of stock markets:</p>
        <ul>
          <li><strong>Primary Market:</strong> It creates securities and acts as a platform where firms float their new stock options and bonds for the general public to acquire.</li>
          <li><strong>Secondary Market:</strong> Here, investors trade in securities without involving the companies who issued them in the first place with the help of brokers.</li>
        </ul>

        <h2>Ask and Close</h2>
        <p>The term ‘ask’ in the stock market refers to the lowest price at which a seller will sell the stock. ‘Closing price’ generally refers to the last price at which a stock trades during a regular trading session.</p>

        <h2>Moving Average</h2>
        <p>It is a stock indicator commonly used for technical analysis to smoothen the price data by creating a constantly updated average price. A rising moving average indicates that the security is in an uptrend, while a declining moving average indicates a downtrend.</p>
      </div>
    </div>
  );
}

export default HomePage;
