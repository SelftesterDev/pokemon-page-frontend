// Simple test to verify labels appear in the page
const http = require('http');

function testPageContent() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3002,
      path: '/',
      method: 'GET',
      timeout: 5000
    };

    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        const results = {
          statusCode: res.statusCode,
          hasLabel1: data.includes('Search by Pokemon Name'),
          hasLabel2: data.includes('Filter by Pokemon Type'),
          hasRoot: data.includes('id="root"'),
          hasScript: data.includes('main'),
          dataLength: data.length
        };

        console.log('Page Content Verification:');
        console.log('==========================');
        console.log(`Status Code: ${results.statusCode}`);
        console.log(`Page Size: ${results.dataLength} bytes`);
        console.log(`Root div present: ${results.hasRoot}`);
        console.log(`Has script bundles: ${results.hasScript}`);
        console.log(`Contains "Search by Pokemon Name": ${results.hasLabel1}`);
        console.log(`Contains "Filter by Pokemon Type": ${results.hasLabel2}`);
        console.log('');

        if (results.hasLabel1 && results.hasLabel2 && results.statusCode === 200) {
          console.log('✅ PASS: Both labels found in page content');
          resolve(true);
        } else {
          console.log('❌ FAIL: Missing labels or error status');
          if (!results.hasLabel1) console.log('  - Missing: "Search by Pokemon Name"');
          if (!results.hasLabel2) console.log('  - Missing: "Filter by Pokemon Type"');
          if (results.statusCode !== 200) console.log(`  - HTTP Status: ${results.statusCode}`);

          // Show content sample for debugging
          console.log('\nPage content (first 1000 chars):');
          console.log(data.substring(0, 1000));

          resolve(false);
        }
      });
    });

    req.on('error', (error) => {
      console.error('Error fetching page:', error.message);
      reject(error);
    });

    req.on('timeout', () => {
      req.destroy();
      console.error('Request timeout after 5000ms');
      reject(new Error('Request timeout'));
    });

    req.end();
  });
}

// Run the test
testPageContent()
  .then(success => {
    process.exit(success ? 0 : 1);
  })
  .catch(error => {
    console.error('Test failed:', error);
    process.exit(1);
  });
