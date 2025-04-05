# Dropshipping Website Template

This is a complete GitHub Pages template for a dropshipping business that sells both digital courses and physical beauty products. The template uses Tailwind CSS for styling and integrates with various payment processors.

## Features

- **Free Hosting**: Deploy directly to GitHub Pages
- **Responsive Design**: Works on all devices
- **Payment Integrations**:
  - Gumroad for digital courses
  - PayPal for physical products
  - Stripe for checkout
  - Snipcart for cart functionality
- **Email Collection**: Mailchimp integration
- **Fast Loading**: Optimized for performance

## Pages

1. **Homepage**: Overview of both courses and products
2. **Courses**: Digital dropshipping courses with Gumroad/Payhip integration
3. **Products**: Physical beauty products with Snipcart integration

## Setup Instructions

1. **Fork this repository** to your GitHub account
2. **Enable GitHub Pages** in your repository settings
3. **Customize the content**:
   - Replace all placeholder images
   - Update product and course information
   - Add your payment processor API keys
4. **Deploy**: Your site will be live at `https://yourusername.github.io/repositoryname`

## Payment Integrations

### For Courses (Digital Products)
- **Gumroad**: Replace Gumroad links with your product links
- **Payhip**: Update Payhip buttons with your product IDs
- **Stripe**: For the course bundle, set up a Stripe Checkout session

### For Products (Physical Goods)
- **Snipcart**:
  1. Sign up at [Snipcart.com](https://snipcart.com)
  2. Replace `YOUR_SNIPCART_API_KEY` in products.html with your public API key
  3. Configure your shipping and taxes in Snipcart dashboard
- **PayPal**: Update PayPal email in the buy buttons

### Email Marketing
- **Mailchimp**:
  1. Create a signup form in Mailchimp
  2. Replace the form action URL with your Mailchimp form URL

## Customization

- **Colors**: Edit the Tailwind config in the script tag at the bottom of each HTML file
- **Fonts**: Add your preferred fonts via Google Fonts or similar
- **Images**: Replace all placeholder images with your product/course images

## Support

For questions or issues, please open an issue on GitHub.