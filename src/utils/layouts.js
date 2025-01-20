"use client";
const layouts = [
  {
    name: "Modern Blue",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Blue Template</title>
</head>
<body >
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <tr>
            <td style="padding: 20px; text-align: center;">
                <img id="logo" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Company Logo" style="max-width: 100px; height: auto;">
            </td>
        </tr>
        <tr>
            <td style="padding: 20px;">
                <h1 id="title" style="color: #0066cc; font-size: 24px; margin-bottom: 20px;">Welcome to Our Newsletter</h1>
                <p id="content" style="color: #333333; font-size: 16px; line-height: 1.6;">
                    Thank you for subscribing to our newsletter. We're excited to share the latest updates and news with you!
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #0066cc; color: #ffffff; text-align: center; padding: 10px; font-size: 14px;">
                © 2023 Your Company. All rights reserved.
            </td>
        </tr>
    </table>
</body>
</html>
    `,
  },
  {
    name: "Elegant Green",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elegant Green Template</title>
</head>
<body>
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #4caf50;">
        <tr>
            <td style="padding: 20px; text-align: center; border-bottom: 2px solid #4caf50;">
                <img id="logo" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Company Logo" style="max-width: 80px; height: auto;">
            </td>
        </tr>
        <tr>
            <td style="padding: 30px;">
                <h1 id="title" style="color: #2e7d32; font-size: 28px; margin-bottom: 20px; font-style: italic;">Discover Nature's Beauty</h1>
                <p id="content" style="color: #1b5e20; font-size: 18px; line-height: 1.8;">
                    Immerse yourself in the wonders of nature with our latest collection of eco-friendly products.
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #4caf50; color: #ffffff; text-align: center; padding: 15px; font-size: 16px;">
                Embrace the Green Life
            </td>
        </tr>
    </table>
</body>
</html>
    `,
  },
  {
    name: "Vibrant Orange",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vibrant Orange Template</title>
</head>
<body>
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 0 15px rgba(255,152,0,0.3);">
        <tr>
            <td style="background-color: #ff9800; padding: 30px; text-align: center;">
                <img id="logo" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Company Logo" style="max-width: 120px; height: auto;">
            </td>
        </tr>
        <tr>
            <td style="padding: 40px;">
                <h1 id="title" style="color: #e65100; font-size: 32px; margin-bottom: 25px; text-transform: uppercase; letter-spacing: 2px;">Ignite Your Passion</h1>
                <p id="content" style="color: #ff5722; font-size: 18px; line-height: 1.7;">
                    Get ready to embark on an exciting journey of creativity and innovation with our latest offerings!
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #ff5722; color: #ffffff; text-align: center; padding: 20px; font-size: 18px; font-weight: bold;">
                Unleash Your Potential
            </td>
        </tr>
    </table>
</body>
</html>
    `,
  },
  {
    name: "Cool Purple",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cool Purple Template</title>
</head>
<body>
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-top: 5px solid #9c27b0; border-bottom: 5px solid #9c27b0;">
        <tr>
            <td style="padding: 30px; text-align: center;">
                <img id="logo" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Company Logo" style="max-width: 100px; height: auto;">
            </td>
        </tr>
        <tr>
            <td style="padding: 0 40px 40px;">
                <h1 id="title" style="color: #6a1b9a; font-size: 36px; margin-bottom: 20px; text-align: center;">Embrace the Future</h1>
                <p id="content" style="color: #4a148c; font-size: 18px; line-height: 1.6; text-align: center;">
                    Discover the cutting-edge technologies that are shaping tomorrow's world. Stay ahead of the curve with our innovative solutions.
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #9c27b0; color: #ffffff; text-align: center; padding: 15px; font-size: 16px;">
                Innovation at Your Fingertips
            </td>
        </tr>
    </table>
</body>
</html>
    `,
  },
  {
    name: "Sunny Yellow",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sunny Yellow Template</title>
</head>
<body>
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 3px dashed #fbc02d; border-radius: 15px;">
        <tr>
            <td style="padding: 30px; text-align: center;">
                <img id="logo" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Company Logo" style="max-width: 90px; height: auto;">
            </td>
        </tr>
        <tr>
            <td style="padding: 20px 40px;">
                <h1 id="title" style="color: #f57f17; font-size: 30px; margin-bottom: 20px; text-align: center; text-shadow: 2px 2px #fff9c4;">Brighten Your Day!</h1>
                <p id="content" style="color: #ff6f00; font-size: 18px; line-height: 1.7; text-align: center;">
                    Spread sunshine and happiness with our cheerful products. Let's make the world a brighter place together!
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #fbc02d; color: #ffffff; text-align: center; padding: 15px; font-size: 18px; border-radius: 0 0 12px 12px;">
                Smile, It's Contagious! 😊
            </td>
        </tr>
    </table>
</body>
</html>
    `,
  },
  {
    name: "Sleek Black",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sleek Black Template</title>
</head>
<body>
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #000000; border: 1px solid #424242;">
        <tr>
            <td style="padding: 30px; text-align: center;">
                <img id="logo" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Company Logo" style="max-width: 100px; height: auto; filter: invert(1);">
            </td>
        </tr>
        <tr>
            <td style="padding: 40px;">
                <h1 id="title" style="color: #ffffff; font-size: 36px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 3px;">Elevate Your Style</h1>
                <p id="content" style="color: #bdbdbd; font-size: 18px; line-height: 1.6;">
                    Discover our exclusive collection of premium products designed for those who appreciate sophistication and elegance.
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #424242; color: #ffffff; text-align: center; padding: 20px; font-size: 16px;">
                Luxury Redefined
            </td>
        </tr>
    </table>
</body>
</html>
    `,
  },
  {
    name: "Pastel Dream",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pastel Dream Template</title>
</head>
<body>
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 30px; overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.1);">
        <tr>
            <td style="background: linear-gradient(45deg, #ffcdd2, #e1bee7, #bbdefb); padding: 40px; text-align: center;">
                <img id="logo" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Company Logo" style="max-width: 120px; height: auto;">
            </td>
        </tr>
        <tr>
            <td style="padding: 40px;">
                <h1 id="title" style="color: #9575cd; font-size: 32px; margin-bottom: 25px; text-align: center; font-weight: 300;">Embrace Tranquility</h1>
                <p id="content" style="color: #7986cb; font-size: 18px; line-height: 1.8; text-align: center;">
                    Indulge in the soothing world of pastels. Our products are designed to bring peace and harmony to your everyday life.
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #b2ebf2; color: #4dd0e1; text-align: center; padding: 20px; font-size: 18px; font-weight: 500;">
                Serenity in Every Detail
            </td>
        </tr>
    </table>
</body>
</html>
    `,
  },
  {
    name: "Bold Red",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bold Red Template</title>
</head>
<body >
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-left: 10px solid #d50000; border-right: 10px solid #d50000;">
        <tr>
            <td style="padding: 30px; text-align: center;">
                <img id="logo" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Company Logo" style="max-width: 100px; height: auto;">
            </td>
        </tr>
        <tr>
            <td style="padding: 40px;">
                <h1 id="title" style="color: #b71c1c; font-size: 36px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 2px; text-align: center;">Ignite Your Passion</h1>
                <p id="content" style="color: #c62828; font-size: 18px; line-height: 1.6; text-align: center;">
                    Experience the power of bold choices. Our products are designed for those who dare to stand out and make a statement.
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #d50000; color: #ffffff; text-align: center; padding: 20px; font-size: 18px; font-weight: bold;">
                Be Bold, Be You
            </td>
        </tr>
    </table>
</body>
</html>
    `,
  },
  {
    name: "Eco Green",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eco Green Template</title>
</head>
<body style="font-family: 'Roboto', sans-serif; background-color: #e8f5e9; margin: 0; padding: 0;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 15px rgba(76,175,80,0.3);">
        <tr>
            <td style="background-color: #4caf50; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                <img id="logo" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Company Logo" style="max-width: 100px; height: auto;">
            </td>
        </tr>
        <tr>
            <td style="padding: 40px;">
                <h1 id="title" style="color: #2e7d32; font-size: 32px; margin-bottom: 20px; text-align: center;">Embrace Sustainability</h1>
                <p id="content" style="color: #1b5e20; font-size: 18px; line-height: 1.7; text-align: center;">
                    Join us in our mission to create a greener planet. Discover our eco-friendly products that make a positive impact on the environment.
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #81c784; color: #ffffff; text-align: center; padding: 20px; font-size: 16px; border-radius: 0 0 8px 8px;">
                Green Living, Happy Earth
            </td>
        </tr>
    </table>
</body>
</html>
    `,
  },
  {
    name: "Minimalist Gray",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minimalist Gray Template</title>
</head>
<body style="font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 0;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #e0e0e0;">
        <tr>
            <td style="padding: 40px; text-align: center;">
                <img id="logo" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Company Logo" style="max-width: 80px; height: auto;">
            </td>
        </tr>
        <tr>
            <td style="padding: 0 40px 40px;">
                <h1 id="title" style="color: #424242; font-size: 28px; margin-bottom: 20px; text-align: center; font-weight: 300;">Simplicity Redefined</h1>
                <p id="content" style="color: #616161; font-size: 16px; line-height: 1.6; text-align: center;">
                    Discover the beauty in simplicity. Our minimalist designs bring clarity and focus to your everyday life.
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #eeeeee; color: #757575; text-align: center; padding: 20px; font-size: 14px;">
                Less is More
            </td>
        </tr>
    </table>
</body>
</html>
    `,
  },
  {
    name: "Retro Vibes",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Retro Vibes Template</title>
</head>
<body style="font-family: 'Courier New', Courier, monospace; background-color: #ffe0b2; margin: 0; padding: 0;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 4px solid #ff9800; border-radius: 10px;">
        <tr>
            <td style="background-color: #ff9800; padding: 30px; text-align: center;">
                <img id="logo" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Company Logo" style="max-width: 120px; height: auto;">
            </td>
        </tr>
        <tr>
            <td style="padding: 40px;">
                <h1 id="title" style="color: #e65100; font-size: 36px; margin-bottom: 20px; text-align: center; text-transform: uppercase; letter-spacing: 3px;">Blast from the Past</h1>
                <p id="content" style="color: #f57c00; font-size: 18px; line-height: 1.7; text-align: center;">
                    Take a trip down memory lane with our collection of retro-inspired products. Relive the good old days in style!
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #ffa726; color: #ffffff; text-align: center; padding: 20px; font-size: 18px; font-weight: bold;">
                Groovy Vibes Only
            </td>
        </tr>
    </table>
</body>
</html>
    `,
  },
  {
    name: "Tech Blue",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tech Blue Template</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #e3f2fd; margin: 0; padding: 0;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-top: 5px solid #2196f3; box-shadow: 0 0 20px rgba(33,150,243,0.3);">
        <tr>
            <td style="padding: 30px; text-align: center;">
                <img id="logo" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Company Logo" style="max-width: 100px; height: auto;">
            </td>
        </tr>
        <tr>
            <td style="padding: 0 40px 40px;">
                <h1 id="title" style="color: #1976d2; font-size: 32px; margin-bottom: 20px; text-align: center;">Innovate with Us</h1>
                <p id="content" style="color: #0d47a1; font-size: 18px; line-height: 1.6; text-align: center;">
                    Stay ahead of the curve with our cutting-edge tech solutions. Embrace the future of innovation today.
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #2196f3; color: #ffffff; text-align: center; padding: 20px; font-size: 16px;">
                Powering Tomorrow's Technology
            </td>
        </tr>
    </table>
</body>
</html>
    `,
  },
  {
    name: "Rustic Charm",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rustic Charm Template</title>
</head>
<body style="font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif; background-color: #f1e8d9; margin: 0; padding: 0;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 2px solid #8d6e63; border-radius: 5px;">
        <tr>
            <td style="background-color: #d7ccc8; padding: 30px; text-align: center;">
                <img id="logo" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Company Logo" style="max-width: 120px; height: auto;">
            </td>
        </tr>
        <tr>
            <td style="padding: 40px;">
                <h1 id="title" style="color: #5d4037; font-size: 34px; margin-bottom: 20px; text-align: center; font-style: italic;">Embrace the Warmth</h1>
                <p id="content" style="color: #795548; font-size: 18px; line-height: 1.7; text-align: center;">
                    Discover the comfort of rustic living with our handcrafted collection. Bring the charm of the countryside into your home.
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #8d6e63; color: #ffffff; text-align: center; padding: 20px; font-size: 18px; font-weight: bold;">
                Cozy Comforts Await
            </td>
        </tr>
    </table>
</body>
</html>
    `,
  },
  {
    name: "Neon Nights",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neon Nights Template</title>
</head>
<body style="font-family: 'Orbitron', sans-serif; background-color: #000000; margin: 0; padding: 0;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #1a1a1a; border: 2px solid #00ffff; box-shadow: 0 0 20px rgba(0,255,255,0.5);">
        <tr>
            <td style="padding: 40px; text-align: center;">
                <img id="logo" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Company Logo" style="max-width: 120px; height: auto; filter: drop-shadow(0 0 10px #00ffff);">
            </td>
        </tr>
        <tr>
            <td style="padding: 0 40px 40px;">
                <h1 id="title" style="color: #ff00ff; font-size: 36px; margin-bottom: 20px; text-align: center; text-shadow: 0 0 10px #ff00ff;">Electrify Your Night</h1>
                <p id="content" style="color: #00ffff; font-size: 18px; line-height: 1.6; text-align: center; text-shadow: 0 0 5px #00ffff;">
                    Step into a world of vibrant energy and pulsating beats. Our neon-inspired collection will light up your life.
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #333333; color: #ffffff; text-align: center; padding: 20px; font-size: 18px; text-shadow: 0 0 5px #ffffff;">
                Glow with the Flow
            </td>
        </tr>
    </table>
</body>
</html>
    `,
  },
  {
    name: "Tropical Paradise",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tropical Paradise Template</title>
</head>
<body style="font-family: 'Montserrat', sans-serif; background-color: #e0f2f1; margin: 0; padding: 0;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 15px; overflow: hidden; box-shadow: 0 0 20px rgba(0,150,136,0.2);">
        <tr>
            <td style="background: linear-gradient(135deg, #00897b, #4db6ac); padding: 40px; text-align: center;">
                <img id="logo" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Company Logo" style="max-width: 120px; height: auto;">
            </td>
        </tr>
        <tr>
            <td style="padding: 40px;">
                <h1 id="title" style="color: #00695c; font-size: 32px; margin-bottom: 20px; text-align: center;">Escape to Paradise</h1>
                <p id="content" style="color: #00796b; font-size: 18px; line-height: 1.7; text-align: center;">
                    Indulge in the beauty of tropical bliss. Our collection brings the serenity of island life to your doorstep.
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #26a69a; color: #ffffff; text-align: center; padding: 20px; font-size: 18px; font-weight: bold;">
                Your Oasis Awaits
            </td>
        </tr>
    </table>
</body>
</html>
    `,
  },
  {
    name: "Autumn Harvest",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Autumn Harvest Template</title>
</head>
<body style="font-family: 'Georgia', serif; background-color: #fff3e0; margin: 0; padding: 0;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 3px solid #ff9800; border-radius: 10px;">
        <tr>
            <td style="background-color: #fff3e0; padding: 30px; text-align: center;">
                <img id="logo" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Company Logo" style="max-width: 100px; height: auto;">
            </td>
        </tr>
        <tr>
            <td style="padding: 40px;">
                <h1 id="title" style="color: #e65100; font-size: 34px; margin-bottom: 20px; text-align: center;">Embrace the Fall Season</h1>
                <p id="content" style="color: #bf360c; font-size: 18px; line-height: 1.6; text-align: center;">
                    Celebrate the warmth of autumn with our cozy collection. From pumpkin spice to falling leaves, we've got everything to make your fall memorable.
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #ff9800; color: #ffffff; text-align: center; padding: 20px; font-size: 18px; font-weight: bold;">
                Harvest the Memories
            </td>
        </tr>
    </table>
</body>
</html>
    `,
  },
  {
    name: "Winter Wonderland",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Winter Wonderland Template</title>
</head>
<body style="font-family: 'Arial', sans-serif; background-color: #e3f2fd; margin: 0; padding: 0;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 2px solid #90caf9; border-radius: 15px; box-shadow: 0 0 20px rgba(144,202,249,0.5);">
        <tr>
            <td style="background-color: #e3f2fd; padding: 30px; text-align: center; border-radius: 13px 13px 0 0;">
                <img id="logo" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Company Logo" style="max-width: 100px; height: auto;">
            </td>
        </tr>
        <tr>
            <td style="padding: 40px;">
                <h1 id="title" style="color: #1565c0; font-size: 32px; margin-bottom: 20px; text-align: center;">Discover Winter Magic</h1>
                <p id="content" style="color: #0d47a1; font-size: 18px; line-height: 1.7; text-align: center;">
                    Experience the enchantment of winter with our frosty collection. From cozy sweaters to sparkling decorations, we'll help you create your own winter wonderland.
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #2196f3; color: #ffffff; text-align: center; padding: 20px; font-size: 18px; font-weight: bold; border-radius: 0 0 13px 13px;">
                Let It Snow!
            </td>
        </tr>
    </table>
</body>
</html>
    `,
  },
  {
    name: "Spring Bloom",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spring Bloom Template</title>
</head>
<body style="font-family: 'Verdana', sans-serif; background-color: #f1f8e9; margin: 0; padding: 0;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 3px solid #8bc34a; border-radius: 20px; overflow: hidden;">
        <tr>
            <td style="background: linear-gradient(135deg, #cddc39, #8bc34a); padding: 30px; text-align: center;">
                <img id="logo" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Company Logo" style="max-width: 100px; height: auto;">
            </td>
        </tr>
        <tr>
            <td style="padding: 40px;">
                <h1 id="title" style="color: #33691e; font-size: 30px; margin-bottom: 20px; text-align: center;">Welcome the Spring Season</h1>
                <p id="content" style="color: #558b2f; font-size: 18px; line-height: 1.6; text-align: center;">
                    Embrace the freshness of spring with our blooming collection. From floral prints to pastel hues, we've got everything to brighten up your world.
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #aed581; color: #33691e; text-align: center; padding: 20px; font-size: 18px; font-weight: bold;">
                Blossom into Spring
            </td>
        </tr>
    </table>
</body>
</html>
    `,
  },
  {
    name: "Summer Vibes",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Summer Vibes Template</title>
</head>
<body style="c: 'Trebuchet MS', sans-serif; background-color: #fff9c4; margin: 0; padding: 0;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 4px solid #ffd54f; border-radius: 25px; overflow: hidden;">
        <tr>
            <td style="background: linear-gradient(135deg, #ffd54f, #ffb300); padding: 35px; text-align: center;">
                <img id="logo" src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png" alt="Company Logo" style="max-width: 110px; height: auto;">
            </td>
        </tr>
        <tr>
            <td style="padding: 40px;">
                <h1 id="title" style="color: #ff6f00; font-size: 34px; margin-bottom: 20px; text-align: center;">Soak Up the Sun</h1>
                <p id="content" style="color: #f57c00; font-size: 18px; line-height: 1.7; text-align: center;">
                    Dive into summer fun with our sizzling collection. From beach essentials to tropical flavors, we've got your summer adventures covered.
                </p>
            </td>
        </tr>
        <tr>
            <td style="background-color: #ffd54f; color: #ff6f00; text-align: center; padding: 20px; font-size: 18px; font-weight: bold;">
                Endless Summer Awaits
            </td>
        </tr>
    </table>
</body>
</html>
    `,
  },
];

export default layouts;
