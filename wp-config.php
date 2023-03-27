<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'openside' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'kk$~%?*al9N^~Z#Ax&R?R S9k=+9GTNL9qx/(@us= #(ReG2Pylg_I!O 5)7P<*<' );
define( 'SECURE_AUTH_KEY',  '27u0UMAR4o(p<*vHtsS$7oLx9galoBQh$~wseSNulBLLz.Ok4z?^8Vr*7!`+m&`z' );
define( 'LOGGED_IN_KEY',    'H|)@jiYz26CE5HyR!yD=XJmnv}L>Dm7*[v3uhdV(xQ2g&fuQUv?j>6fzhy [0:^ ' );
define( 'NONCE_KEY',        'Wiy#>>POIg)M5-GKO1*:4aNkJ(cWQ_w>0pWI(Uy?2hlDBG-<::eubjtOum/24y*P' );
define( 'AUTH_SALT',        'J0nFU=jn>E@X~t|xvmVfB3VkLf3c.TmdZPiBL4,:y?&sd.VDIVH,LF xV@U-4K,`' );
define( 'SECURE_AUTH_SALT', 'seR#*yhN*9B+;HZkR](4x*,EMu6v6voK@cH.&{j=MT[`dj&z%n9-R_=Ekv@J`V2O' );
define( 'LOGGED_IN_SALT',   'brb(qnh@HblK)jPkqB=EiNZfYQsEhN=]+ |s:EoU)#?z&xq{p?~1&,Cfp+yQ[K+d' );
define( 'NONCE_SALT',       'B6lkKCLw0?l L,YxJIn|_#:nE2F##XEX!}V[WD6<Q7gEJO*H$RkZD-9o<eg lx=1' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
