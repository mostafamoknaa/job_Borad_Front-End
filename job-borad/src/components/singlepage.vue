
<script setup>
import { ref } from 'vue';

const job = ref({
  title: 'Senior UX Designer',
  company: 'Facebook',
  jobType: 'FULL-TIME',
  featured: true,
  description: `Veistar is a Shopify Plus agency, and we partner with brands to help them grow, we also do the same with our people!

Here at Veistar, we don't just make websites, we create exceptional digital experiences that contribute to the growth of agencies, businesses, and retailers—we bring brands together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.

The role requires extensive project specifications into clean, test-driven, easily maintainable code. You will work with the Project and Development teams as well as with the Technical Director, Senior, closely to protect plans and delivering work that meets functional & non-functional requirements. You will have the opportunity to create new, innovative, secure and scalable features for our clients on the Shopify platform.

Want to work with us? You're in good company!`,
  requirements: [
    'Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on',
    '3+ years of experience in back-end development working either with multiple smaller projects simultaneously or large-scale applications',
    'Experience with HTML, JavaScript, CSS, PHP, Symphony and/or Laravel',
    'Working regularly with APIs and web services (REST, GraphQL, SOAP, etc)',
    'Have experience/awareness in Agile application development, commercial off-the-shelf software, middleware, servers and storage, and database management.',
    'Familiarity with version control and project management systems (e.g., Github, Jira)',
    'Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on',
    'Ambitious and hungry to grow your career in a fast-growing agency'
  ],
  desirable: [
    'Working knowledge of eCommerce platforms, ideally Shopify but also others e.g. Magento, WooCommerce, Visualsoft to enable seamless migrations.',
    'Working knowledge of payment gateways',
    'API platform experience / Building restful APIs'
  ],
  benefits: [
    'Early finish on Fridays for our end of week catch up (4:30 finish, and drink of your choice from the bar)',
    '28 days holiday (including bank holidays) rising by 1 day per year PLUS an additional day off on your birthday',
    'Retirement pension',
    'Healthcare package',
    'Paid community days to volunteer',
    '£100 contribution for your own personal learning and development'
  ],
  salary: {
    min: 100000,
    max: 120000,
    currency: 'USD',
    info: 'Yearly salary'
  },
  location: {
    city: 'Dhaka',
    country: 'Bangladesh'
  },
  jobBenefits: [
    { text: '40th Salary', type: 'default' },
    { text: 'Asynchronous', type: 'default', short: 'Async' },
    { text: 'Learning budget', type: 'default' },
    { text: 'Vision Insurance', type: 'default' },
    { text: '4 day workweek', type: 'default' },
    { text: 'Profit Sharing', type: 'default' },
    { text: 'Free gym membership', type: 'default' },
    { text: 'Equity Compensation', type: 'default' },
    { text: 'No politics at work', type: 'default' }
  ],
  overview: {
    posted: '14 Jan 2021',
    closes: '14 Aug 2021',
    level: 'Entry Level'
  },
  experience: '50k-80k/month',
  education: 'Graduation',
  tags: ['Back-end', 'PHP', 'Laravel', 'Development', 'Front-end']
});

const jobs = ref([
  {
    id: 1,
    title: 'Technical Support Specialist',
    type: 'PART-TIME',
    salaryMin: 30000,
    salaryMax: 35000,
    company: {
      name: 'Google Inc.',
      logo: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png'
    },
    location: 'Dhaka, Bangladesh'
  },
  {
    id: 2,
    title: 'Senior UX Designer',
    type: 'FULL-TIME',
    salaryMin: 60000,
    salaryMax: 75000,
    company: {
      name: 'Face Book.',
      logo: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png'
    },
    location: 'UK, London'
  },
  {
    id: 3,
    title: 'Marketing Officer',
    type: 'INTERNSHIP',
    salaryMin: 20000,
    salaryMax: 25000,
    company: {
      name: 'Google Inc.',
      logo: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png'
    },
    location: 'Dhaka, Bangladesh'
  },
  {
    id: 4,
    title: 'Junior Graphic Designer',
    type: 'INTERNSHIP',
    salaryMin: 30000,
    salaryMax: 35000,
    company: {
      name: 'Google Inc.',
      logo: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png'
    },
    location: 'Dhaka, Bangladesh'
  },
  {
    id: 5,
    title: 'Interaction Designer',
    type: 'PART-TIME',
    salaryMin: 50000,
    salaryMax: 65000,
    company: {
      name: 'Google Inc.',
      logo: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png'
    },
    location: 'Dhaka, Bangladesh'
  },
  {
    id: 6,
    title: 'Project Manager',
    type: 'FULL-TIME',
    salaryMin: 70000,
    salaryMax: 85000,
    company: {
      name: 'Google Inc.',
      logo: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png'
    },
    location: 'Dhaka, Bangladesh'
  }
]);

const quickLinks = ref(['About', 'Contact', 'Pricing', 'Blog']);
const candidateLinks = ref(['Browse Jobs', 'Browse Employers', 'Candidate Dashboard', 'Saved Jobs']);
const employersLinks = ref(['Post a Job', 'Browse Candidates', 'Employers Dashboard', 'Applications']);
const supportLinks = ref(['Faqs', 'Privacy Policy', 'Terms & Conditions']);

const copyLink = () => {
  alert('Link copied to clipboard!');
};
</script>


<template>
  <div class="job-portal">
    <header class="header">
      <div class="container">
        <div class="header-content">
          <nav class="nav">
           
          </nav>
        </div>
      </div>
    </header>

    <main class="main">
      <div class="container">
        <div class="job-details">
          <div class="job-header">
            <div class="company-logo">
              <img src="data:image/png;base64,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" alt="Facebook Logo" />
            </div>
            <div class="job-header-content">
              <h1>{{ job.title }}</h1>
              <div class="company-info">
                <span>at {{ job.company }}</span>
                <span class="job-type" :class="{ 'featured': job.featured }">{{ job.jobType }}</span>
                <span v-if="job.featured" class="featured-tag">Featured</span>
              </div>
            </div>
            <div class="apply-button">
              <button class="btn btn-primary">Apply Now</button>
            </div>
          </div>

          <div class="job-content">
            <div class="row">
              <div class="col-md-6">
                <div class="job-description">
                  <h2>Job Description</h2>
                  <p v-for="(paragraph, index) in job.description.split('\n\n')" :key="'desc-' + index">
                    {{ paragraph }}
                  </p>
                </div>
                            
            <div class="requirements">
              <h2>Requirements</h2>
              <ul>
                <li v-for="(requirement, index) in job.requirements" :key="'req-' + index">
                  {{ requirement }}
                </li>
              </ul>
            </div>

            <div class="desirable">
              <h2>Desirable:</h2>
              <ul>
                <li v-for="(item, index) in job.desirable" :key="'desire-' + index">
                  {{ item }}
                </li>
              </ul>
            </div>

            <div class="benefits">
              <h2>Benefits</h2>
              <ul>
                <li v-for="(benefit, index) in job.benefits" :key="'ben-' + index">
                  {{ benefit }}
                </li>
              </ul>
            </div>
              </div>
              <div class="col-md-6">
                <div class="job-meta">
                  <div class="row">
                    <div class="col-md-7">
                      <div class="meta-box">
                        <div class="meta-icon">
                          <i class="fas fa-money-bill"></i>
                        </div>
                        <div class="meta-content">
                          <h3>Salary (USD)</h3>
                          <div class="salary">${{ job.salary.min.toLocaleString() }} - ${{ job.salary.max.toLocaleString() }}</div>
                          <div class="salary-info">{{ job.salary.info }}</div>
                        </div>
                      </div>
                  </div>
                  <div class="col-md-5">
                  <div class="meta-box">
                    <div class="meta-icon">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="meta-content">
                      <h3>Job Location</h3>
                      <p>{{ job.location.city }}, {{ job.location.country }}</p>
                    </div>
                  </div>
                  </div>
                  </div>
                  <div class="meta-box">
                    <div class="meta-icon">
                      <i class="fas fa-gift"></i>
                    </div>
                    <div class="meta-content">
                      <h3>Job Benefits</h3>
                      <div class="benefit-tags">
                        <span v-for="(benefit, idx) in job.jobBenefits" :key="'benefit-' + idx" class="benefit-tag">
                          {{ benefit.short || benefit.text }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="job-overview">
                    <h2>Job Overview</h2>
                    <div class="overview-grid">
                      <div class="overview-item">
                        <div class="overview-icon">
                          <i class="far fa-calendar"></i>
                        </div>
                        <div class="overview-content">
                          <h4>DATE POSTED</h4>
                          <p>{{ job.overview.posted }}</p>
                        </div>
                      </div>
                      <div class="overview-item">
                        <div class="overview-icon">
                          <i class="far fa-calendar-times"></i>
                        </div>
                        <div class="overview-content">
                          <h4>JOB CLOSES AT</h4>
                          <p>{{ job.overview.closes }}</p>
                        </div>
                      </div>
                      <div class="overview-item">
                        <div class="overview-icon">
                          <i class="fas fa-user-tie"></i>
                        </div>
                        <div class="overview-content">
                          <h4>JOB LEVEL</h4>
                          <p>{{ job.overview.level }}</p>
                        </div>
                      </div>
                      <div class="overview-item">
                        <div class="overview-icon">
                          <i class="fas fa-briefcase"></i>
                        </div>
                        <div class="overview-content">
                          <h4>EXPERIENCE</h4>
                          <p>{{ job.experience }}</p>
                        </div>
                      </div>
                      <div class="overview-item">
                        <div class="overview-icon">
                          <i class="fas fa-graduation-cap"></i>
                        </div>
                        <div class="overview-content">
                          <h4>EDUCATION</h4>
                          <p>{{ job.education }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="share-job">
                    <h2>Share this job:</h2>
                    <div class="share-buttons">
                      <button @click="copyLink" class="btn btn-outline" style="color:blue;"> <i class="fa-solid fa-link me-2"></i>Copy Links</button>
                      <a href="#" class="social-link linkedin"><i class="fab fa-linkedin"></i></a>
                      <a href="#" class="social-link facebook"><i class="fab fa-facebook"></i></a>
                      <a href="#" class="social-link twitter"><i class="fab fa-twitter"></i></a>
                      <a href="#" class="social-link email"><i class="fas fa-envelope"></i></a>
                    </div>
                  </div>
      
                  <div class="job-tags">
                    <h3>Job tags:</h3>
                    <div class="tags">
                      <span v-for="(tag, index) in job.tags" :key="'tag-' + index" class="tag">{{ tag }}</span>
                    </div>
                  </div>
                </div>    
              </div> 
            </div>
          </div>
        </div>
      </div>
    </main>
    <div class="app-container">
      <h2>Related Jobs</h2>
      <div class="job-card-grid">
        <div class="job-card" v-for="job in jobs" :key="job.id">
          <span class="job-type" :class="job.type.toLowerCase().replace(' ', '-')">
            {{ job.type.toUpperCase() }}
          </span>
          <h3>{{ job.title }}</h3>
          <div class="salary">Salary: ${{ job.salaryMin.toLocaleString() }} - ${{ job.salaryMax.toLocaleString() }}</div>
          <div class="company-info">
            <img class="company-logo" :src="job.company.logo" :alt="job.company.name + ' logo'">
            <div>
              <div class="company-name">{{ job.company.name }}</div>
              <div class="location">
                <i class="fas fa-map-marker-alt"></i> {{ job.location }}
              </div>
            </div>
          </div>
          <button class="bookmark-btn">
            <i class="far fa-bookmark"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
  .job-portal {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #333;
    background-color: #f5f7fa;
    line-height: 1.6;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .job-details {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    margin-top: 2rem;
    margin-bottom: 2rem;
    overflow: hidden;
  }

  .job-header {
    display: flex;
    align-items: center;
    padding: 2rem;
    border-bottom: 1px solid #eaedf3;
  }

  .company-logo {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    overflow: hidden;
    margin-right: 1.5rem;
    flex-shrink: 0;
  }

  .company-logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .job-header-content {
    flex: 1;
  }

  .job-header-content h1 {
    font-size: 1.75rem;
    font-weight: 600;
    margin: 0 0 0.5rem;
    color: #1e2a39;
  }

  .company-info {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: #6b7c93;
  }

  .company-info span {
    margin-right: 1rem;
  }

  .job-type {
    background-color: #e3f3ff;
    color: #0071e3;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  .featured-tag {
    background-color: #ffedcc;
    color: #ff9500;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
  }

  .apply-button {
    margin-left: auto;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    outline: none;
    font-size: 0.9rem;
  }

  .btn-primary {
    background-color: #1877f2;
    color: white;
  }

  .btn-primary:hover {
    background-color: #1366d6;
  }

  .btn-outline {
    background-color: transparent;
    border: 1px solid #dcdfe6;
    color: #606266;
  }

  .btn-outline:hover {
    background-color: #f9f9f9;
  }

  .job-content {
    padding: 2rem;
  }

  .job-description {
    margin-bottom: 2rem;
  }

  .job-description h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #1e2a39;
  }

  .job-description p {
    margin-bottom: 1rem;
    color: #4a5568;
  }

  .job-meta {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .meta-box {
    display: flex;
    background-color: #f9fafb;
    padding: 1.5rem;
    border-radius: 8px;
    border: 1px solid #eaedf3;
  }

  .meta-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e6f4ff;
    color: #1877f2;
    border-radius: 8px;
    margin-right: 1rem;
    flex-shrink: 0;
  }

  .meta-content h3 {
    font-size: 0.9rem;
    font-weight: 500;
    margin: 0 0 0.5rem;
    color: #6b7c93;
  }

  .meta-content p {
    margin: 0;
    color: #1e2a39;
    font-weight: 500;
  }

  .salary {
    font-size: 1rem;
    font-weight: 600;
    color: #10b981;
  }

  .salary-info {
    font-size: 0.8rem;
    color: #6b7c93;
  }

  .benefit-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .benefit-tag {
    background-color: #f3f4f6;
    color: #4b5563;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
  }

  .requirements, .desirable, .benefits {
    margin-bottom: 2rem;
  }

  .requirements h2, .desirable h2, .benefits h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #1e2a39;
  }

  .requirements ul, .desirable ul, .benefits ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .requirements li, .desirable li, .benefits li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    color: #4a5568;
  }

  .requirements li:before, .desirable li:before, .benefits li:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #1877f2;
    font-weight: bold;
  }

  .job-overview {
    margin-bottom: 2rem;
  }

  .job-overview h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #1e2a39;
  }

  .overview-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }

  .overview-item {
    display: flex;
    align-items: flex-start;
  }

  .overview-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e6f4ff;
    color: #1877f2;
    border-radius: 8px;
    margin-right: 1rem;
    flex-shrink: 0;
  }

  .overview-content h4 {
    font-size: 0.7rem;
    font-weight: 600;
    margin: 0 0 0.25rem;
    color: #6b7c93;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .overview-content p {
    margin: 0;
    color: #1e2a39;
    font-weight: 500;
  }

  .share-job {
    margin-bottom: 2rem;
  }

  .share-job h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #1e2a39;
  }

  .share-buttons {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .social-link {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: white;
    text-decoration: none;
  }

  .linkedin {
    background-color: #0077b5;
  }

  .facebook {
    background-color: #1877f2;
  }

  .twitter {
    background-color: #1da1f2;
  }

  .email {
    background-color: #6b7c93;
  }

  .job-tags {
    margin-bottom: 2rem;
  }

  .job-tags h3 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.75rem;
    color: #6b7c93;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    background-color: #f3f4f6;
    color: #4b5563;
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 500;
  }

  /* Add responsive styles */
  @media (max-width: 768px) {
    .job-header {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .company-logo {
      margin-bottom: 1rem;
    }
    
    .apply-button {
      margin-left: 0;
      margin-top: 1.5rem;
      width: 100%;
    }
    
    .apply-button .btn {
      width: 100%;
    }
    
    .overview-grid {
      grid-template-columns: 1fr;
    }
  }
  .app-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

  }

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;
  }

  .job-card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 40px;
  }

  .job-card {
    border: 1px solid #eaeaea;
    border-radius: 10px;
    padding: 16px;
    position: relative;
  }

  .job-type {
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .part-time {
    color: #5c8f0b;
  }

  .full-time {
    color: #2b75d3;
  }

  .internship {
    color: #00a278;
  }

  .salary {
    font-size: 14px;
    color: #777;
    margin-bottom: 12px;
  }

  .company-info {
    display: flex;
    align-items: center;
    margin-top: 16px;
  }

  .company-logo {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  .company-name {
    font-weight: 500;
    font-size: 14px;
  }

  .location {
    font-size: 13px;
    color: #777;
    display: flex;
    align-items: center;
    margin-top: 4px;
  }

  .location i {
    font-size: 12px;
    margin-right: 4px;
  }

  .bookmark-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    background: none;
    border: none;
    cursor: pointer;
    color: #ddd;
    font-size: 16px;
  }

  .bookmark-btn:hover {
    color: #ffb300;
  }

  .section-divider {
    background-color: #222;
    color: white;
    padding: 30px;
  }

  .footer-nav {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .nav-section h3 {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 500;
  }

  .nav-section ul {
    list-style: none;
  }

  .nav-section li {
    margin-bottom: 10px;
  }

  .nav-section a {
    color: #ddd;
    text-decoration: none;
    font-size: 14px;
  }

  .nav-section a:hover {
    color: white;
  }

  .company-details {
    margin-bottom: 20px;
  }

  .company-details .logo {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .company-details .contact-info {
    color: #aaa;
    font-size: 14px;
    margin-bottom: 6px;
  }

  .company-details .address {
    color: #aaa;
    font-size: 14px;
    line-height: 1.4;
  }
</style> 